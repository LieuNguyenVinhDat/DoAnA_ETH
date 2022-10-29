// import React, { Component } from 'react';
// import { Sidebar } from 'primereact/sidebar';
// import { Button } from 'primereact/button';

// export default class AppSidebar extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             visibleLeft: false,
//             visibleRight: false,
//             visibleTop: false,
//             visibleBottom: false,
//             visibleFullScreen: false,
//             visibleCustomToolbar: false
//         };
//     }

//     render() {
//         const customIcons = (
//             <React.Fragment>
//                 <button className="p-sidebar-icon p-link mr-1">
//                     <span className="pi pi-print" />
//                 </button>
//                 <button className="p-sidebar-icon p-link mr-1">
//                     <span className="pi pi-arrow-right" />
//                 </button>
//             </React.Fragment>
//         );

//         return (
//             <div>
//                 <div className="card">
//                     <Sidebar visible={this.state.visibleLeft} onHide={() => this.setState({ visibleLeft: false })}>
//                         <ul>
                            
//                         <i className="pi pi-plus" style={{'fontSize': '1em'}}> Add new certificates</i>
                                  
                            
//                         </ul>
//                     </Sidebar>



//                     <Button icon="pi pi-bars" onClick={() => this.setState({ visibleLeft: true })} className="mr-2" />

//                 </div>
//             </div>
//         )
//     }
// }

