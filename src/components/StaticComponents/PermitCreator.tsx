import React, { useEffect, useState } from "react";
import Drawer from "rc-drawer";
import Form, { Field, useForm } from "rc-field-form";
import Input from "../form/Input";
import DatePicker from "react-datepicker";
import { licenseValidator } from "../../libs/license";
import Button from "../button";
import { toast, ToastContainer } from "react-toastify";
import Requests from "../../libs/request";
import { DataRow } from "../../tables/AllPermitTable";

function PermitCreator({
  open = false,
  dataToEdit,
  refetch,
  setEditData,
  onHandleClick,
}: {
  open: boolean;
  dataToEdit: DataRow;
  setEditData: React.Dispatch<React.SetStateAction<any>>;
  refetch: any;
  onHandleClick: () => void;
}) {
  const [form] = Form.useForm();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [country, setCountry] = useState("germany");
  const [loading, setLoading] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    if (Object.keys(dataToEdit).length) {
      setUpdateMode(true);
      const { country, startDate, endDate, licensePlate, name } = dataToEdit;
      form.setFieldValue("name", name);
      form.setFieldValue("country", country);
      form.setFieldValue("licensePlate", licensePlate);
      form.setFieldValue("startDate", startDate);
      form.setFieldValue("endDate", endDate);
      setCountry(country);
      return;
    }
    form.resetFields();
    setUpdateMode(false);
  }, [dataToEdit]);

  const handleSubmit = (values: any) => {
    setLoading(true);
    Requests.fetchWithOutToken({
      url: updateMode ? `permit/${dataToEdit.id}` : "/permit",
      method: updateMode ? "PUT" : "POST",
      data: values,
    })
      .then((res) => {
        setLoading(false);
        if (res) {
          refetch("permits");
          form.resetFields();
          setEndDate(null);
          setStartDate(null);
          setEditData({});
          toast(
            updateMode
              ? "Permit Updated successfully"
              : "Permit Created successfully",
            { type: "success" }
          );
          return;
        }
        toast("An error occured, please try again", { type: "error" });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <Drawer
      level={null}
      placement="right"
      width={"55%"}
      open={open}
      onHandleClick={onHandleClick}
    >
      <section className="p-10 py-10">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg py-10">Create park permit</p>
          {updateMode && (
            <div>
              <Button onClick={() => setEditData({})} type="secondary">
                Create new permit
              </Button>
            </div>
          )}
        </div>

        <Form onFinish={handleSubmit} form={form}>
          {(values, form) => {
            const licensePlateError = form.getFieldError("licensePlate");
            const nameError = form.getFieldError("name");
            const countryError = form.getFieldError("country");

            return (
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Field name="name" rules={[{ required: true }]}>
                    <Input
                      type="text"
                      placeholder="Full Name"
                      size="large"
                      className="rounded-lg w-full"
                      required
                      error={!!nameError.length}
                    />
                  </Field>
                </div>
                <div>
                  <label htmlFor="country" className="block mb-2">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <Field name="country" rules={[{ required: true }]}>
                    <select
                      required
                      style={{ height: "55px", width: "100%" }}
                      name="country"
                      className={`rounded-lg ${
                        countryError.length &&
                        `border focus:border-red-400 focus:ring-red-400`
                      }`}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="">---Select Country---</option>
                      <option value="germany">Germany</option>
                      <option value="france">France</option>
                      <option value="austria">Austria</option>
                      <option value="switzerland">Switzerland</option>
                    </select>
                  </Field>
                </div>

                <div>
                  <label htmlFor="startDate" className="block mb-2">
                    Start Date
                  </label>
                  <Field name="startDate">
                    <DatePicker
                      selected={startDate}
                      className="h-[55px] rounded-lg w-full"
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      dateFormat="MMMM d, yyyy h:mm aa"
                    />
                  </Field>
                </div>

                <div>
                  <label htmlFor="endDate" className="block mb-2">
                    End Date
                  </label>
                  <Field name="endDate">
                    <DatePicker
                      selected={endDate}
                      className="h-[55px] rounded-lg w-full"
                      onChange={(date) => setEndDate(date)}
                      showTimeSelect
                      dateFormat="MMMM d, yyyy h:mm aa"
                    />
                  </Field>
                </div>

                <div className="relative">
                  <label htmlFor="licensePlate" className="block mb-2">
                    License Plate <span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="licensePlate"
                    rules={[
                      {
                        required: true,
                        pattern: licenseValidator[country].regex,
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      required
                      placeholder={licenseValidator[country].placeholder}
                      size="large"
                      className="rounded-lg w-full"
                      error={!!licensePlateError.length}
                    />
                  </Field>
                  <span className="absolute block  text-red-500 capitalize">
                    {licensePlateError[0]?.includes("pattern")
                      ? `license does not match pattern ${licenseValidator[country].placeholder}`
                      : licensePlateError[0]}
                  </span>
                </div>
                <div className="flex items-end">
                  <Button
                    loading={loading}
                    className="py-4 w-full"
                    type="primary"
                  >
                    {updateMode ? "Update" : "Submit"}
                  </Button>
                </div>
              </div>
            );
          }}
        </Form>
        <ToastContainer />
      </section>
    </Drawer>
  );
}

export default PermitCreator;
