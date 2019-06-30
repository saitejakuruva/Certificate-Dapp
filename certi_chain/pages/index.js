import React,{Component} from 'react';
import Certificate from '../ethereum/certificate';
import web3 from '../ethereum/web3';
import {Form,Button,Message,Input} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link,Router} from '../routes';
import New from './new';

class certificateIssue extends Component{
  static async getInitialProps(props){
    const certificateCount = await Certificate.methods.getCertificateCount().call();

    return { certificateCount};
  }




  state = {
    marksObtained : '',
    InstituteName : '',
    IssuerName : '',
    CandidateName : '',
    CourseName : '',
    Location : '',
    DateOfCompletion : '',
    loading :  false,
    errorMessage : '',

  };

  onSubmit = async event =>{
    event.preventDefault();
    const {marksObtained,InstituteName,IssuerName,CandidateName,CourseName,Location,DateOfCompletion} = this.state;
    this.setState({loading : true, errorMessage: ''});
    try{
      const  accounts = await web3.eth.getAccounts();
      await Certificate.methods.certificateIssue(
        marksObtained,
        InstituteName,
        IssuerName,
        CandidateName,
        CourseName,
        Location,
        DateOfCompletion
      ).send({
        from : accounts[0]
      }) ;
      Router.pushRoute(`/new`);
    }catch(err){
      this.setState({errorMessage:err.message});
    }
    this.setState({loading:false});
  };



render(){
  return(
    <Layout >

    <h3>Thanks for enrolling our course.</h3>
    <Form onSubmit ={this.onSubmit} error={!!this.state.errorMessage} >
    <Form.Field>
    <label>Marksobtained</label>
    <Input
    value={this.state.marksObtained}
    onChange={event => this.setState({marksObtained : event.target.value})}
    />
    </Form.Field>
    <Form.Field>
    <label>InstituteName</label>
    <Input
    value={this.state.InstituteName}
    onChange={event => this.setState({InstituteName : event.target.value})}
    />
    </Form.Field>
    <Form.Field>
    <label>IssuerName</label>
    <Input
    value={this.state.IssuerName}
    onChange={event => this.setState({IssuerName : event.target.value})}
    />
    </Form.Field>
    <Form.Field>
    <label>CandidateName</label>
    <Input
    value={this.state.CandidateName}
    onChange={event => this.setState({CandidateName : event.target.value})}
    />
    </Form.Field>
    <Form.Field>
    <label>CourseName</label>
    <Input
    value={this.state.CourseName}
    onChange={event => this.setState({CourseName : event.target.value})}
    />
    </Form.Field>
    <Form.Field>
    <label>Location</label>
    <Input
    value={this.state.Location}
    onChange={event => this.setState({Location : event.target.value})}
    />
    </Form.Field>
    <Form.Field>
    <label>DateOfCompletion</label>
    <Input
    value={this.state.DateOfCompletion}
    onChange={event => this.setState({DateOfCompletion : event.target.value})}
    />
    </Form.Field>
    <Message error header="Oops!!" content={this.state.errorMessage}/>
    <Link route=''>
    <Button primary loading={this.state.loading}>Issue</Button>
    </Link>
    </Form>
    <h3>So far {this.props.certificateCount}  certificates have been issued.</h3>


    </Layout>

  );
}
}

export default certificateIssue;
