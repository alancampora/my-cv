import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import Content from './components/Layout/Content';
import Left from './components/Layout/Left';
import Header from './components/Layout/Header';
import HeaderMain from './components/Layout/HeaderMain';
import Text from './components/Text/Text';
import Section from './components/Section/Section';
import HeaderDescription from './components/HeaderDescription/HeaderDescription';
import {getCVData, log} from './actions/actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = getCVData();
    }
       
    render() {
         return (
            <div>
                <Layout>
                    <HeaderMain photo={this.state.photo} title={this.state.name} 
                        subtitle={this.state.title} data={this.state.data}/>
                    <Content>
                        <Section title="goals" icon="fas fa-angle-right fa-2x"> 
                            <Text>
                                {this.state.goals}
                            </Text>
                        </Section>
                        <Section title="experience" icon="fas fa-angle-right fa-2x">
                                {<HeaderDescription description={this.state.experience}/>}
                        </Section>
                        <Section title="education" icon="fas fa-angle-right fa-2x">
                                {<HeaderDescription description={this.state.education}/>}
                        </Section>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
