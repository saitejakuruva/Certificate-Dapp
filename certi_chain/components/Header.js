import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes';
export default () => {
return(
<Menu style ={{marginTop:'10px', backgroundColor :'#b595f9'}}>
<Link route="/">
<a className="item">
BlockGene
</a>
</Link>
<Menu.Menu position="center">
<Link route="/">
<a className="item">
Ethereum Blockchain Certification
</a>
</Link>
</Menu.Menu>
</Menu>

);

};
