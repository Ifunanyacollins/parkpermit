import React, { useState } from "react";
import Drawer from "rc-drawer";
import Form, { Field, useForm } from "rc-field-form";
import Input from "../form/Input";
import DatePicker from "react-datepicker";
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
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  return (
    <Drawer
      level={null}
      placement="right"
      width={"50%"}
      open={open}
      onHandleClick={onHandleClick}
    >
      <section className="p-10">
        <Form
          onFinish={(values) => {
            console.log("Finish:", values);
          }}
          form={form}
        >
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
                />
              </Field>
            </div>
            <div>
              <label htmlFor="name" className="block mb-2">
                Country
              </label>
              <Field name="Country">
                <select
                  required
                  style={{ height: "55px", width: "100%" }}
                  name="country"
                  className="rounded-lg"
                >
                  <option>Germany</option>
                  <option>France</option>
                </select>
              </Field>
            </div>

            <div>
              <label htmlFor="name" className="block mb-2">
                Start Date
              </label>
              <Field name="startdate">
                <DatePicker
                  required
                  selected={startDate}
                  className="h-[55px] rounded-lg w-full"
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </Field>
            </div>

            <div>
              <label htmlFor="name" className="block mb-2">
                End Date
              </label>
              <Field name="enddate">
                <DatePicker
                  required
                  selected={endDate}
                  className="h-[55px] rounded-lg w-full"
                  onChange={(date) => setEndDate(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </Field>
            </div>

            <div>
              <label htmlFor="licensePlate" className="block mb-2">
                License Plate
              </label>
              <Field name="licensePlate" rules={[{ required: true }]}>
                <Input
                  type="text"
                  placeholder="License plate number"
                  size="large"
                  className="rounded-lg w-full"
                />
              </Field>
            </div>
          </div>

          <button>Submit</button>
        </Form>
      </section>
    </Drawer>
  );
}

export default PermitCreator;
