import web3 from "./web3";
const address = "0x113A53f311E9D8C2AeA4207718E18020e56733C8";
const abi = [
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "certificates",
    outputs: [
      { name: "Id", type: "uint256" },
      { name: "marksObtained", type: "uint256" },
      { name: "Issuer", type: "address" },
      { name: "InstituteName", type: "string" },
      { name: "IssuerName", type: "string" },
      { name: "CandidateName", type: "string" },
      { name: "CourseName", type: "string" },
      { name: "Location", type: "string" },
      { name: "DateOfCompletion", type: "string" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getCertificateCount",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "certificateDataCount",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "marksObtained", type: "uint256" },
      { name: "InstituteName", type: "string" },
      { name: "IssuerName", type: "string" },
      { name: "CandidateName", type: "string" },
      { name: "CourseName", type: "string" },
      { name: "Location", type: "string" },
      { name: "DateOfCompletion", type: "string" }
    ],
    name: "certificateIssue",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "admin",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  }
];
export default new web3.eth.Contract(abi, address);
