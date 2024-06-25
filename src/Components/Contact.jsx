import { CONTACT } from "../constants";

export default function Contact() {
  return (
    <div className="border-b border-neutral pb-20">
      <h1 classname="my-10 text-center text-4xl"></h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}