import React,{Component} from 'react';
import {Container,Image,Segment} from 'semantic-ui-react';
import Certificate from '../ethereum/certificate';
import web3 from '../ethereum/web3';


class certificateHere extends Component{
  static async getInitialProps(props){
  const numberofCertificates = await Certificate.methods.getCertificateCount().call();
  const recentCertificate = await Certificate.methods.certificates(numberofCertificates-1).call();
  return { numberofCertificates , recentCertificate};

  }




  render(){

 const { numberofCertificates , recentCertificate}= this.props;
    return (

      <Container
      style={{

          textAlign:'center',
            //backgroundImage: `url(${"https://www.seekpng.com/png/detail/328-3284691_fairies-book-set-frames-for-youtube-videos.png"})`,
            backgroundSize: 'cover',
            backgroundAttachment:'fixed',
            width:'100%',
            height:'20px'


        }}
      >


<div className='sub'>
    <h1><b>Blockchain Certification</b></h1>
  <h3 >This is to certify that</h3><br/>
  <p><b>{recentCertificate.CandidateName} has successfully completed his {recentCertificate.CourseName} developer Program which<br/>
is of 14 hrs online course: Build projects using solidity on {recentCertificate.DateOfCompletion}.</b></p>
</div>
<Image src='https://bit.ly/2YgwSHV' size='small' style={{ marginLeft: 'auto', marginRight: 'auto',padding: '100px'}} />
<div style={{ position: 'absolute',
  bottom: '8px',
  left: '16px'}}
  >
<h4 className='issued'style={{textAlign:'left', textDecoration: 'underline'}}>Issued by:{recentCertificate.InstituteName}</h4>
<h4 className='location'style={{textAlign:'left',textDecoration: 'underline'}}>Location:{recentCertificate.Location}</h4>
</div>
<div style={{ position: 'absolute',
  bottom: '8px',
  right: '16px'}}>
  <h4 className='issuer'style={{textAlign:'right',textDecoration: 'underline'}}>Issuer Name:{recentCertificate.IssuerName}</h4></div>
  <p>All your certificates have been securely stored in the Ethereum Blockchain & can be validated at <a href="https://rinkeby.etherscan.io/address/0x113a53f311e9d8c2aea4207718e18020e56733c8" target="_blank">Here</a></p>

  <style jsx>{`
        h1 {
          color: orange;
          font-style: oblique;
          font-size: 50px;
          padding-top: 85px;
        }
        h3{
          font-size: 40px;
          color:orange;
          padding-top: 25px;

        }
        p{
          font-size: 20px;
          color: orange;
          padding:30px;
        }
        h4.issued{
          color: orange;
          padding-bottom: 25px;
          padding-left:100px;
}
h4.location{
  padding-bottom: 100px;
  padding-left:100px;
  color:orange;

}
h4.issuer{
  padding-bottom: 100px;
  padding-right:100px;
  color:orange;


}

      `}</style>


</Container>

);
  }
}

export default certificateHere;
