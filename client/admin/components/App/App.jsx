import React from 'react';
import Layout from 'components/Layout';
import Grid from './Grid/Grid';
import Filter from './Filter/Filter';

const App = ({onToggleFilter, filterExpanded}) => {

    return (
        <Layout>
            <div className="columns container">
                <div className="row">
                    <Grid  onToggleFilter={onToggleFilter} />
                    <Filter onToggleFilter={onToggleFilter} filterExpanded={filterExpanded} />
                </div>
            </div>
        </Layout>
    )
};

export default App;