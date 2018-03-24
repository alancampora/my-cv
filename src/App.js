import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import Content from './components/Layout/Content';
import Left from './components/Layout/Left';
import Header from './components/Layout/Header';
import BubbleData from './components/BubbleData/BubbleData';
import {getCVData, log} from './actions/actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = getCVData();
    }

    render() {
        let experience = this.state.experience;

        return (
            <div>
                <Layout>
                    <Left
                        description={this.state.goals}
                        photo={this.state.photo}
                    />
                    <Content>
                        <Header
                            name={this.state.name}
                            title={this.state.title}
                        />
                        {experience.map((experience, index) => (
                            <BubbleData key={index} {...experience} />
                        ))}
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
