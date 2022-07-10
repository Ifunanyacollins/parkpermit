import React, { useState } from "react";
import Drawer from "rc-drawer";
import Form, { Field, useForm } from "rc-field-form";
import Input from "../form/Input";
import DatePicker from "react-datepicker";
import { licenseValidator } from "../../libs/license";
import Button from "../button";
import { toast } from "react-toastify";
import Requests from "../../libs/request";
function PermitCreator({
  open = false,
  onClose,
  onHandleClick,
}: {
  open: boolean;

  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  onHandleClick: () => void;
}) {
  const [form] = Form.useForm();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [country, setCountry] = useState("germany");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values: any) => {
    setLoading(true);
    Requests.fetchWithOutToken({
      url: "/permit",
      method: "POST",
      data: values,
    })
      .then((res) => {
        setLoading(false);
        toast(res.message, { type: "success" });
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
        <p className="font-bold text-lg py-10">Create park permit</p>
        <Form onFinish={handleSubmit} form={form}>
          {(values, form) => {
            const licensePlateError = form.getFieldError("licensePlate");
            const nameError = form.getFieldError("name");
            const countryError = form.getFieldError("country");

            return (
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Full Name
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
                    Country
                  </label>
                  <Field name="Country" rules={[{ required: true }]}>
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
                  <label htmlFor="startdate" className="block mb-2">
                    Start Date
                  </label>
                  <Field name="startdate">
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
                  <label htmlFor="enddate" className="block mb-2">
                    End Date
                  </label>
                  <Field name="enddate">
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
                    License Plate
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
                    Submit
                  </Button>
                </div>
              </div>
            );
          }}
        </Form>
      </section>
    </Drawer>
  );
}

export default PermitCreator;
