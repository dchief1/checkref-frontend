import * as React from 'react';
import AdminMainContent from '../../../components/admin/adminMainContent';
import Initial from './initial';
import ViewCompany from './viewCompany';
import EditCompany from './editCompany';
import EditCompanyTeams from './editCompanyTeams';

const ALL_VIEW_STATES = {
    initial: 'INITIAL',
    viewCompany: 'VIEW_COMPANY',
    editCompany: 'EDIT_COMPANY',
    editCompanyTeams: 'EDIT_COMPANY_TEAMS',
};

const main = () => {
    const [viewState, setViewState] = React.useState(ALL_VIEW_STATES.initial);
    return (
        <AdminMainContent>
            {viewState == ALL_VIEW_STATES.initial && (
                <Initial ALL_VIEW_STATES={ALL_VIEW_STATES} setViewState={setViewState} />
            )}
            {viewState == ALL_VIEW_STATES.viewCompany && (
                <ViewCompany ALL_VIEW_STATES={ALL_VIEW_STATES} setViewState={setViewState} />
            )}
            {viewState == ALL_VIEW_STATES.editCompany && (
                <EditCompany ALL_VIEW_STATES={ALL_VIEW_STATES} setViewState={setViewState} />
            )}
            {viewState == ALL_VIEW_STATES.editCompanyTeams && (
                <EditCompanyTeams ALL_VIEW_STATES={ALL_VIEW_STATES} setViewState={setViewState} />
            )}
        </AdminMainContent>
    );
};

export default main;
