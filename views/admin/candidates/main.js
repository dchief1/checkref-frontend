import * as React from 'react';
import AdminMainContent from '../../../components/admin/adminMainContent';
import Initial from './initial';
import ViewCandidate from './viewCandidate';

const ALL_VIEW_STATES = {
    initial: 'INITIAL',
    viewCandidate: 'VIEW_CANDIDATE',
};

const main = () => {
    const [viewState, setViewState] = React.useState(ALL_VIEW_STATES.initial);
    return (
        <AdminMainContent>
            {viewState == ALL_VIEW_STATES.initial && (
                <Initial ALL_VIEW_STATES={ALL_VIEW_STATES} setViewState={setViewState} />
            )}
            {viewState == ALL_VIEW_STATES.viewCandidate && (
                <ViewCandidate ALL_VIEW_STATES={ALL_VIEW_STATES} setViewState={setViewState} />
            )}
        </AdminMainContent>
    );
};

export default main;
