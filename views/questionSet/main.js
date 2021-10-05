import React, {useState} from 'react';
import {Box} from '@chakra-ui/core';
import ProfileMainContent from '../../components/profileMainContent';
import AllQuestions from './allQuestions';
import NewQuestion from './newQuestion';
import OneQuestion from './oneQuestion';

const allContentViews = {
    allQuestions: 'ALL_QUESTIONS',
    newQuestion: 'NEW_QUESTION',
    oneQuestion: 'ONE_QUESTION',
};

const main = () => {
    const [contentView, setContentView] = useState(allContentViews.allQuestions);
    const [currentQuestionSet, setCurrentQuestionSet] = React.useState('');
    const [currentQuestionMode, setCurrentQuestionMode] = React.useState('view');
    return (
        <ProfileMainContent
            color={contentView !== allContentViews.allQuestions ? 'white' : 'inherit'}
        >
            <Box>
                <Box>
                    {contentView === allContentViews.allQuestions && (
                        <AllQuestions
                            allContentViews={allContentViews}
                            setContentView={setContentView}
                            setCurrentQuestionSet={setCurrentQuestionSet}
                            setCurrentQuestionMode={setCurrentQuestionMode}
                        />
                    )}
                    {contentView === allContentViews.newQuestion && (
                        <NewQuestion
                            allContentViews={allContentViews}
                            setContentView={setContentView}
                        />
                    )}
                    {contentView === allContentViews.oneQuestion && (
                        <OneQuestion
                            currentQuestionSet={currentQuestionSet}
                            currentQuestionMode={currentQuestionMode}
                            allContentViews={allContentViews}
                            setContentView={setContentView}
                        />
                    )}
                </Box>
            </Box>
        </ProfileMainContent>
    );
};

export default main;
