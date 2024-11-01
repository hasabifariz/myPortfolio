const Contact = () => {
  return (
    <div className="p-10 bg-base-100">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <form className="form-control">
        <input type="text" placeholder="Your Name" className="input input-bordered mb-4" />
        <input type="email" placeholder="Your Email" className="input input-bordered mb-4" />
        <textarea className="textarea textarea-bordered mb-4" placeholder="Your Message"></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
