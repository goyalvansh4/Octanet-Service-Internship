import React from "react";

const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex gap-1 items-center">
      <label  className="form-label">
        Your Name <span  className="text-danger">*</span>
      </label>
      <input
        id="name"
        type="text"
         className="form-control"
        placeholder="Name :"
        name="name"
      />

      <label  className="form-label">
        Your Email <span  className="text-danger">*</span>
      </label>
      <input
        id="email"
        type="email"
         className="form-control"
        placeholder="Email :"
        name="email"
      />
</div>
      <label  className="form-label">Subject</label>
      <input
        id="subject"
         className="form-control"
        placeholder="Subject :"
        name="subject"
      />

      <label  className="form-label">
        Comments <span  className="text-danger">*</span>
      </label>
      <textarea
        name="comments"
        id="comments"
        rows="4"
         className="form-control"
        placeholder="Message :"
      ></textarea>

      <button type="submit" id="submit"  className="mx-auto btn btn-primary" name="send">
        Send Message
      </button>
    </form>
  );
};

export default Form;
