import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../services/api";

function UploadDocuments() {

  const [documents, setDocuments] = useState([]);

  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);



  useEffect(() => {

    let mounted = true;

    const fetchDocuments = async () => {

      try {

        const response = await api.get("/documents");

        if (mounted) {

          setDocuments(response.data);

        }

      }

      catch (error) {

        console.error(error);

        toast.error("Failed to load documents");

      }

    };

    fetchDocuments();

    return () => {

      mounted = false;

    };

  }, []);



  const refreshDocuments = async () => {

    try {

      const response = await api.get("/documents");

      setDocuments(response.data);

    }

    catch (error) {

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



      await api.post(

        "/documents/upload",

        formData,

        {

          headers: {

            "Content-Type":

              "multipart/form-data",

          },

        }

      );



      toast.success(

        "File uploaded successfully"

      );



      await refreshDocuments();



      setFile(null);

    }

    catch (error) {

      console.error(error);

      toast.error("Upload failed");

    }

    finally {

      setLoading(false);

    }

  };



  return (

    <div>

      <h1

        className="

          text-3xl

          font-bold

          mb-8

          text-slate-900

          dark:text-white

        "

      >

        Upload Documents

      </h1>



      <div

        className="

          bg-white

          dark:bg-slate-900



          border

          border-slate-200

          dark:border-slate-700



          rounded-2xl

          shadow-sm



          p-8

        "

      >


        {/* Upload Area */}

        <div

          className="

            border-2

            border-dashed



            border-slate-300

            dark:border-slate-600



            rounded-2xl



            p-16



            text-center



            bg-slate-50

            dark:bg-slate-950



            transition-all

          "

        >

          <p

            className="

              text-lg

              mb-6



              text-slate-700

              dark:text-slate-300

            "

          >

            Drag & Drop Files Here

          </p>



          <input

            type="file"

            onChange={(e) =>

              setFile(e.target.files[0])

            }

            className="

              text-slate-700

              dark:text-slate-300

            "

          />

        </div>




        {/* Selected File */}

        {

          file && (

            <div

              className="

                mt-6



                p-4



                rounded-xl



                bg-slate-100

                dark:bg-slate-800

              "

            >

              <p

                className="

                  text-sm



                  text-slate-500

                  dark:text-slate-400

                "

              >

                Selected File

              </p>



              <p

                className="

                  mt-1



                  font-semibold



                  text-slate-900

                  dark:text-white

                "

              >

                {file.name}

              </p>

            </div>

          )

        }




        {/* Upload Button */}

        <button

          onClick={handleUpload}

          disabled={loading}

          className="

            mt-8



            px-6

            py-3



            rounded-xl



            bg-blue-600

            hover:bg-blue-700



            disabled:bg-slate-500



            text-white



            transition

          "

        >

          {

            loading

            ?

            "Uploading..."

            :

            "Upload Document"

          }

        </button>




        {/* Uploaded Files */}

        <div className="mt-10">

          <h2

            className="

              text-xl

              font-bold

              mb-5



              text-slate-900

              dark:text-white

            "

          >

            Uploaded Files

          </h2>



          {

            documents.length > 0

            ?

            (

              <div className="space-y-3">

                {

                  documents.map((doc) => (

                    <div

                      key={doc.id}

                      className="

                        p-4



                        rounded-xl



                        bg-slate-100

                        dark:bg-slate-800



                        text-slate-800

                        dark:text-white

                      "

                    >

                      {doc.filename}

                    </div>

                  ))

                }

              </div>

            )

            :

            (

              <p

                className="

                  text-slate-500

                  dark:text-slate-400

                "

              >

                No documents uploaded yet.

              </p>

            )

          }

        </div>

      </div>

    </div>

  );

}

export default UploadDocuments;