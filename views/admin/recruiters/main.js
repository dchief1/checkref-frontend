import * as React from 'react';
import AdminMainContent from '../../../components/admin/adminMainContent';
import Initial from './initial';
import ViewRecruiter from './viewRecruiter';

const ALL_VIEW_STATES = {
    initial: 'INITIAL',
    viewRecruiter: 'VIEW_RECRUITER',
};

const main = () => {
    const [viewState, setViewState] = React.useState(ALL_VIEW_STATES.initial);
    return (
        <AdminMainContent>
            {viewState == ALL_VIEW_STATES.initial && (
                <Initial ALL_VIEW_STATES={ALL_VIEW_STATES} setViewState={setViewState} />
            )}
            {viewState == ALL_VIEW_STATES.viewRecruiter && (
                <ViewRecruiter ALL_VIEW_STATES={ALL_VIEW_STATES} setViewState={setViewState} />
            )}
        </AdminMainContent>
    );
};

export default main;
