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
    const loadDocuments = async () => {
      try {
        const data = await getDocuments();
        setDocuments(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadDocuments();
  }, []);

  const refreshDocuments = async () => {
    try {
      const data = await getDocuments();
      setDocuments(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDocument(id);
      await refreshDocuments();
    } catch (error) {
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
    } catch (error) {
      console.error(error);
    }
  };

  const handleReindex = async (id) => {
    try {
      const result = await reindexDocument(id);

      alert(
        `${result.message}\nChunks : ${result.chunks}`
      );

      await refreshDocuments();
    } catch (error) {
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

  const filteredDocuments = documents.filter((doc) =>
    (doc.filename || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Documents
      </h1>

      <input
        type="text"
        placeholder="Search documents..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full border rounded-lg p-3 mb-6"
      />

      {filteredDocuments.map((document) => (
        <DocumentCard
          key={document.id}
          document={document}
          onDelete={handleDelete}
          onRename={handleRename}
          onReindex={handleReindex}
          onOpen={handleOpen}
        />
      ))}
    </div>
  );
}

export default Documents;