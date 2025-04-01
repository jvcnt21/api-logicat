import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ParceirosService from "../../services/empresas-externas.service";
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';

export default function ListarParceiros() {
    const [partners, setPartners] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const getParceiros = () => {
        ParceirosService.getParceiros().then((data) => setPartners(data.data));
    };

    const onPageChange = (event) => {
        setCurrentPage(event.page);
        setRowsPerPage(event.rows);
    };

    useEffect(() => {
        getParceiros();
    }, []);

    const imageBodyTemplate = (rowData) => {
        return <Avatar image={rowData.sprite} shape="circle" size="large" />;
    };

    const header = (
        <div className="header-container">
            <div className="header-left">
                <h4 className="m-0">Pesquisa por nome</h4>
                <div className="search-container">
                    <span className="p-input-icon-left">
                        <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Buscar..." />
                    </span>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <Toast ref={toast} />
            <div className="card">
                <DataTable
                    header={header}
                    globalFilter={globalFilter}
                    value={partners}
                    dataKey="id"
                    paginator
                    first={currentPage * rowsPerPage}
                    rows={rowsPerPage}
                    onPage={onPageChange}
                    rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="{first} ao {last} de {totalRecords} Pokémon"
                >
                    <Column field="id" header="ID" sortable style={{ minWidth: '5rem' }} />
                    <Column header="Sprite" body={imageBodyTemplate} style={{ minWidth: '6rem' }} />
                    <Column field="name" header="Nome" sortable style={{ minWidth: '10rem' }} />
                    <Column field="typesString" header="Tipos" sortable sortField="types" style={{ minWidth: '10rem' }} />
                    <Column field="height" header="Altura (m)" sortable style={{ minWidth: '8rem' }} />
                    <Column field="weight" header="Peso (kg)" sortable style={{ minWidth: '8rem' }} />
                </DataTable>
            </div>
        </div>
    );
}