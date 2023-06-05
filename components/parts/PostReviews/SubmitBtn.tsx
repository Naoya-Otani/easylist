const SubmitBtn = () => {
  return (
    <div className="flex justify-end mb-2">
      <button
        type="submit"
        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        投稿
      </button>
    </div>
  );
};

export default SubmitBtn;
