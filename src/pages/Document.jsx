import { useState, useEffect } from "react";

import {
  getDocuments,
  deleteDocument,
  renameDocument,
  reindexDocument,
} from "../services/documentApi";

import DocumentCard from "../components/DocumentCard";

function Documents() {

  const [documents, setDocuments] = useState([]);

  const [search, setSearch] = useState("");



  useEffect(() => {

    let mounted = true;

    const fetchDocuments = async () => {

      try {

        const data = await getDocuments();

        if (mounted) {

          setDocuments(data);

        }

      }

      catch (error) {

        console.error(error);

      }

    };

    fetchDocuments();

    return () => {

      mounted = false;

    };

  }, []);



  const refreshDocuments = async () => {

    try {

      const data = await getDocuments();

      setDocuments(data);

    }

    catch (error) {

      console.error(error);

    }

  };



  const handleDelete = async (id) => {

    try {

      await deleteDocument(id);

      setDocuments((prev) =>

        prev.filter((doc) => doc.id !== id)

      );

    }

    catch (error) {

      console.error(error);

    }

  };



  const handleRename = async (document) => {

    try {

      const newName = prompt("Enter new filename");

      if (!newName) return;

      await renameDocument(

        document.id,

        newName

      );

      await refreshDocuments();

    }

    catch (error) {

      console.error(error);

    }

  };



  const handleReindex = async (id) => {

    try {

      const result = await reindexDocument(id);

      alert(

        `${result.message}\nChunks : ${result.chunks}`

      );

    }

    catch (error) {

      console.error(error);

      alert("Re-index Failed");

    }

  };



  const handleOpen = (document) => {

    if (!document.filepath) {

      alert("File path not found");

      return;

    }



    const filename =

      document.filepath.split("/").pop();



    const fileUrl =

      `http://localhost:8000/files/${filename}`;



    window.open(fileUrl, "_blank");

  };



  const filteredDocuments = documents.filter(

    (doc) =>

      (doc.filename || "")

        .toLowerCase()

        .includes(search.toLowerCase())

  );



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

        Documents

      </h1>



      <input

        type="text"

        placeholder="Search documents..."

        value={search}

        onChange={(e) =>

          setSearch(e.target.value)

        }

        className="

          w-full

          px-5

          py-3

          mb-8

          rounded-2xl

          border

          border-slate-300

          bg-white

          text-slate-900

          outline-none

          focus:ring-2

          focus:ring-blue-500



          dark:bg-slate-900

          dark:border-slate-700

          dark:text-white



          transition-all

        "

      />



      {

        filteredDocuments.length === 0 ? (

          <div

            className="

            text-center

            mt-20

            text-slate-500

            dark:text-slate-400

          "

          >

            No Documents Found

          </div>

        ) : (

          <div className="space-y-5">

            {

              filteredDocuments.map((document) => (

                <DocumentCard

                  key={document.id}

                  document={document}

                  onDelete={handleDelete}

                  onRename={handleRename}

                  onReindex={handleReindex}

                  onOpen={handleOpen}

                />

              ))

            }

          </div>

        )

      }

    </div>

  );

}

export default Documents;