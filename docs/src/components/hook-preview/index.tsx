const reactRoot = (appendContentStr: string="", appendDepsStr: string="") => `
import ReactDOM from 'react-dom/client';${appendDepsStr === "" ? '\n' : "\n"+appendDepsStr+"\n"}
const reactRoot= ReactDOM.createRoot(_mount_).render(
    <div>${appendContentStr}</div>);
`


export default reactRoot;

