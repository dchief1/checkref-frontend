import React, {useEffect} from 'react';
import ProfileSideNav from '../../components/profileSideNav';
import Main from './main';
import {connect} from 'react-redux';
import {getTeams} from '../../store/actions/recruiterActions';

const index = props => {
    const {teams, getTeams, getTeamsError, getTeamsSuccess, getTeamsLoading} = props;

    useEffect(() => {
        getTeams();
    }, []);
    return (
        <div>
            <ProfileSideNav />
            <Main
                getTeams={getTeams}
                teams={teams}
                getTeamsError={getTeamsError}
                getTeamsSuccess={getTeamsSuccess}
                getTeamsLoading={getTeamsLoading}
            />
        </div>
    );
};

const mapStateToProps = ({recruiter}) => ({
    teams: recruiter.teams,
    getTeamsError: recruiter.getTeamsError,
    getTeamsSuccess: recruiter.getTeamsSuccess,
    getTeamsLoading: recruiter.getTeamsLoading,
});

export default connect(mapStateToProps, {getTeams})(index);
