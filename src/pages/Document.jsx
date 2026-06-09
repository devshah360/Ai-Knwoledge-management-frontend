import { useState , useEffect } from "react";
import { getDocuments, deleteDocuments,renameDocuments,reindexDocuments} from "../services/documentApi";
import DocumentCard from "../components/DocumentCard";

function Documents(){
        const [documents,setDocuments] = useState([]);
        const [search,setSearch] = useState("");

        useEffect(() => {
                loadDocuments();
        }, []);
        const loadDocuments = async => {
                try {
                        const data = await getDocuments();
                        setDocuments(data);
                } catch(error){
                        console.error(error)
                }
        
        };
        const handleDelete = async (id) => {
                await deleteDocuments(id);
                loadDocuments();
        };
        const handleRename = async (document) => {
                const newName = prompt("Enter new filename");
                if (!newName) return;

                await renameDocuments(
                        document.id,
                        newName
                );
                loadDocuments();
        };
        const handleReindex = async (id) => {
                await reindexDocuments(id);
                alert("Re-index started");
        };
        const filteredDocuments = documents.filter(doc => doc.filename.toLowerCase().includes(search.toLowerCase()));
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
                                className="w-full border rounded-lg p-3 mb-6"/>
                                {filteredDocuments.map(
                                        document => (
                                                <DocumentCard
                                                key={document.id}
                                                document={document}
                                                onDelete={handleDelete}
                                                onRename={handleRename}
                                                onReindex={handleReindex}
                                                />
                                        )
                                )}
                </div>
        );
}

export default Documents;