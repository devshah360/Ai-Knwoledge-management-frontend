import toast from "react-hot-toast";

function Upload() {
  const handleTestUpload = () => {
    toast.success("Document Uploaded");
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">Upload</h1>

      <button
        onClick={handleTestUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Test Upload Toast
      </button>
    </div>
  );
}

export default Upload;