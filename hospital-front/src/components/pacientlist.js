import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import useAuthentication from '../actions/auth';
import { getPacinets } from '../actions/PacinetActions';
import Pacient from './Pacient/pacinet';
import { Plus } from 'lucide-react';
import { getRepartis } from '../actions/RepartiActions'; 
import { getEmployee } from '../actions/SpitaliAction';
import jsPDF from "jspdf";
import "jspdf-autotable";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Document, Packer, Paragraph, Table, TableRow, TableCell, TextRun } from "docx";
import { saveAs } from "file-saver";
import { getQyteti } from '../actions/QyteteAction';

function PacinetList() {
    const { qytetiId ,spitaliId,repartiId} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
 

    useEffect(() => {
        dispatch(getPacinets(qytetiId ,spitaliId,repartiId));
        dispatch(getRepartis(qytetiId, spitaliId,repartiId));
        dispatch(getEmployee(qytetiId, spitaliId));
        dispatch(getQyteti(qytetiId));
    }, [dispatch,qytetiId ,spitaliId,repartiId]);

    const pacinetlist = useSelector((state) => state.pacinetReducerContent.pacinets);
    const repartet = useSelector((state) => state.repartiReducerContent.reparts);
    const reparti = repartet.find((reparti) => reparti.id === parseInt(repartiId));
    const spitalet = useSelector((state) => state.spitaliReducerContent.spitalis);
    const spitali = spitalet.find((spitali) => spitali.id === parseInt(spitaliId));
    const qytetet = useSelector((state) => state.qytetiReducerContent.qytetets);
    const qyteti = qytetet.find((qyteti) => qyteti.id === parseInt(qytetiId));


    console.log("qyteti emri", qyteti?.emri);
    console.log("spitali emri", spitali?.emri);
    /*const isAuthenticated = useAuthentication();  
    if (isAuthenticated === null) {
        return <p>Loading...</p>;
      }

    if (!Array.isArray(pacinetlist)) {
        return <div>No data available</div>;
    }
    */
       /* const exportToPDF = () => {
        const doc = new jsPDF();
        doc.text("Lista e Pacientëve", 14, 15);

        const tableColumn = ["Emri", "Mbiemri", "Email", "Gjinia"];
        const tableRows = pacinetlist.map((p) => [
            p.emri || "—",
            p.mbiemri || "—",
            p.email || "—",
            p.gjinia || "—"
        ]);

        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 20,
        });

        doc.save("pacientet.pdf");
        };*/
        const exportToDocx = () => {
        const tableRows = pacinetlist.map((pacient) =>
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph((pacient?.id ?? '').toString())
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph(pacient?.name ?? '')
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph(pacient?.email ?? '')
                        ],
                    }),
                     new TableCell({
                        children: [
                            new Paragraph(pacient?.gjinia ?? '')
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph(pacient?.address ?? '')
                        ],
                    }),
                ],
            })
        );


        const doc = new Document({
            sections: [
            {
                properties: {},
                children: [
                new Paragraph({
                children: [
                new TextRun({
                    text: "Republika e Kosoves - Ministria e Shendetesise - Qeveria e Kosoves",
                    bold: true,
                    align: "center",
                    size: 26,
                }),
                ],
                spacing: {
                before: 400, 
                },
                }),
                new Paragraph({
                    children: [new TextRun("Qyteti " + (qyteti?.emri || "—"))],
                    heading: "Heading2",
                }),
                new Paragraph({
                    children: [new TextRun("Spitali " + (spitali?.emri || "—"))],
                    heading: "Heading2",
                }),
                new Paragraph({
                    children: [new TextRun("Lista e Pacientëve te Repartit te :" + (reparti.name || "—"))],
                    heading: "Heading2",
                }),
                new Paragraph({
                children: [
                new TextRun({
                    text: "",
                    bold: true,
                    align: "center",
                    size: 20,
                }),
                ],
                spacing: {
                before: 400, 
                },
                }),
                
                new Table({
                    rows: [
                    new TableRow({
                        children: [
                        new TableCell({ children: [new Paragraph("ID")] }),
                        new TableCell({ children: [new Paragraph("Emri")] }),
                        new TableCell({ children: [new Paragraph("Email")] }),
                        new TableCell({ children: [new Paragraph("Gjinia")] }),
                        new TableCell({ children: [new Paragraph("Adresa")] }),
                        ],

                    }),
                    ...tableRows,
                    ],
                }),
                 new Paragraph({ text: "" }), // hapësirë bosh
            new Paragraph({
                children: [
                new TextRun({
                    text: "Nënshkrimi Personit Pergjegjes: _____________________________",
                    bold: true,
                }),
                ],
                spacing: {
                before: 400, 
                },
                }),],
            },
            ],
        });

        Packer.toBlob(doc).then((blob) => {
            saveAs(blob, `pacientet_${qyteti?.emri}_${spitali?.emri}_${reparti?.name}.docx`);
        });
        };

    return (
        <div className="container">
            <div className="mb-6">
                  <Link
                    to={`/addPacinet/${qytetiId}/${spitaliId}/${repartiId}`}
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 absolute right-6 top-2 mt-4 mr-4"
                  >
                  <Plus className="w-5 h-5 mr-2" />
                  Krijo Pacient
                </Link>
                <button
                onClick={exportToDocx}
                className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 mt-4"
                >
                Shkarko Word (.docx)

                </button>
            </div>
            <button
                    onClick={() => navigate(`/repartiList/${qytetiId}/${spitaliId}`)}
                    className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 right-6 top-2 mt-4 mr-4"
                    >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Kthehu prapa
                </button>
            {pacinetlist.map((pacient) => (
                <Pacient
                    key={pacient.id}
                    pacient={pacient}
                     qytetiId={qytetiId} // Pass qytetiId here
                    spitaliId={spitaliId} 
                    repartiId={repartiId}// Pass spitaliId here
                />
            ))}
        </div>
    );
}

export default PacinetList;