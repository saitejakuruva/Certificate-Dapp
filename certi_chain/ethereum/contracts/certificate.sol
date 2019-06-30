pragma solidity ^0.4.17;

contract Certificate{
    address public admin;
    uint Id;

    function Certificate() public{
        admin = msg.sender;
        certificateDataCount = 0;
    }
     struct CertificateData {
        uint Id;
        uint marksObtained;
        address Issuer;
        string InstituteName;
        string IssuerName;
        string CandidateName;
        string CourseName;
        string Location;
        string DateOfCompletion;

    }

    CertificateData[] public certificates;

    uint public certificateDataCount;

  function certificateIssue(
        uint marksObtained,
        string memory InstituteName,
        string memory IssuerName,
        string memory CandidateName,
        string memory CourseName,
        string memory Location,
        string memory DateOfCompletion) public {
            require(admin == msg.sender);

        CertificateData memory newCertificate = CertificateData ({
            marksObtained: marksObtained,
            Id:certificateDataCount,
           Issuer: msg.sender,
            InstituteName :InstituteName,
            IssuerName :IssuerName,
            CandidateName :CandidateName,
            CourseName:CourseName,
            Location :Location,
          DateOfCompletion: DateOfCompletion

        });
          require(marksObtained >=80);
          certificates.push(newCertificate);
          certificateDataCount += 1;
        }

function getCertificateCount() public view returns(uint){
  return certificates.length;
}
}
