import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../services/api";

function UploadDocuments() {
  const [documents, setDocuments] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await api.get("/documents");
        setDocuments(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load documents");
      }
    };

    fetchDocuments();
  }, []);

  const refreshDocuments = async () => {
    try {
      const response = await api.get("/documents");
      setDocuments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await api.post(
        "/documents/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      toast.success("File uploaded successfully");

      await refreshDocuments();

      setFile(null);
    } catch (error) {
      console.error(error);
      toast.error("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Upload Documents
      </h1>

      <div className="bg-white rounded-xl shadow p-8">
        <div
          className="
            border-2
            border-dashed
            border-gray-300
            rounded-lg
            p-12
            text-center
          "
        >
          <p className="mb-4">
            Drag and Drop Files Here
          </p>

          <input
            type="file"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
          />
        </div>

        {file && (
          <div className="mt-5">
            <p>Selected File:</p>

            <p className="font-semibold">
              {file.name}
            </p>
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={loading}
          className="
            mt-6
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-lg
          "
        >
          {loading
            ? "Uploading..."
            : "Upload Document"}
        </button>

        <div className="mt-8">
          <h2 className="font-bold text-xl mb-4">
            Uploaded Files
          </h2>

          {documents.length > 0 ? (
            documents.map((doc) => (
              <div
                key={doc.id}
                className="
                  bg-gray-100
                  p-3
                  rounded-lg
                  mb-2
                "
              >
                {doc.filename}
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No documents uploaded yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadDocuments;