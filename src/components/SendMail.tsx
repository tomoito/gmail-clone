import { Button } from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../store/index";

import { db } from "../../firebase";
import firebase from "firebase";

type FormData = {
  to: string;
  subject: string;
  message: string;
};

const SendMail: React.FC = () => {
  const { register, handleSubmit, watch, errors } = useForm<FormData>();
  const onSubmit = (data: any) => {
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    distPatch(closeSendMessage());
  };
  const distPatch = useDispatch();
  const handleClick = () => {
    distPatch(closeSendMessage());
  };
  return (
    <div className="absolute bottom-0  right-11 bg-gray-500 w-2/5 max-w-lg h-2/5 flex flex-col border-l-2 border-r-2">
      <div className="p-4 flex justify-between items-center text-gray-200">
        <h3 className=" text-lg text-white">New Message</h3>
        {/* <CloneIcon /> */}
        <CloseIcon className=" cursor-pointer" onClick={handleClick} />
      </div>
      <form className="flex flex-1 flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="h-10 p-2 py-5 border-none border-b outline-none"
          type="text"
          placeholder="To"
          name="to"
          ref={register({ required: true })}
        />
        <p>
          {errors.to && (
            <p className="text-red-400  bg-white p-1 text-right">
              'To は必須です'
            </p>
          )}
        </p>
        <input
          className="h-8 p-2 py-5 border-none border-b outline-none"
          type="text"
          placeholder="Subject"
          name="subject"
          ref={register({ required: true })}
        />
        <p>
          {errors.subject && (
            <p className="text-red-400  bg-white p-1 text-right">
              'subject は必須です'
            </p>
          )}
        </p>
        <input
          className="flex-1 h-8 p-2 py-5 border-none border-b outline-none"
          type="text"
          placeholder="Message..."
          name="message"
          ref={register({ required: true })}
        />
        <p>
          {errors.message && (
            <p className="text-red-400  bg-white p-1 text-right">
              'Message は必須です'
            </p>
          )}
        </p>

        <span className="inline rounded-lg transform m-3">
          <Button type="submit" color="primary" variant="contained">
            送信
          </Button>
        </span>
      </form>
    </div>
  );
};

export default SendMail;
