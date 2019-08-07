import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';
import {Grid,Button} from '@material-ui/core';
import {CONTRACT_ADDRESS,CONTRACT_ABI} from './blockchain/config';
import Title from './components/Title';
import Rules from './components/Rules';
import Vote from './components/Vote';
import Result from './components/Result';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      account : '',
      contract : '',
      candidates : [],
      totalCandidates : 0,
      result : [],
      showResult : false
    }
    this.loadBlockchain = this.loadBlockchain.bind(this);
  }

  componentWillMount(){
    this.loadBlockchain();
  }
  async loadBlockchain(){
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS);
    const total  = await contract.methods.candidateCount().call();
    for(var i = 0 ; i <= total ; i++){
      const candidate = await contract.methods.candidates(i).call();
      this.state.candidates.push(candidate);
    }
    this.setState({
      contract : contract,
      totalCandidates : total,
      account : accounts[0]
    })
    console.log(this.state.candidates);
  }

  handleOnClick = async (data) =>{
    const respone = await this.state.contract.methods.doVote(data.id).send({from:this.state.account}).then(
    alert("DONE! Check metamask for transaction report"))
  }

  fetchResult = async () =>{
    for(var i = 0 ; i <= this.state.totalCandidates ; i++){
      const candidate = await this.state.contract.methods.candidates(i).call();
      this.state.result.push(candidate);
    }
    console.log(this.state.result);
    this.setState({
      showResult : true
    })
  }

  render() {
    let tmp;
    if(this.state.showResult){
      tmp = <Result data={this.state.result}/>
    }
    else{
      tmp = <Vote cList={this.state.candidates} handleOnClick={this.handleOnClick}/>
    }
    return (
      <div>
        <Grid container>
            <Grid item xs={4} />
            <Title/>
            <Grid item xs={4} />
            <Grid xs={4} item>
              <Rules />
            </Grid>
            <Grid item xs={8}>
              {tmp}
            </Grid>
            <Button onClick={this.fetchResult} color="secondary" variant="contained">
               Result
            </Button>
        </Grid>
      </div>
    );
  }
}

export default App;
