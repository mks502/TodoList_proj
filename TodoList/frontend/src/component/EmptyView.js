import React, { Component } from 'react';

class EmptyView extends Component {
    render() {
        const {openModal}=this.props
        return (
            <div className="container" style={{height:'800px' ,top:'50%' ,left:'50%', textAlign:"center"}}>
                <div className="row align-items-center"  style={{height:'800px'}} >
                <div className="col" onClick={() => openModal('visible') }>
                현재 어떠한 할 일도 존재하지 않습니다! <br></br> 새로운 할 일을 <b>추가</b> 해보세요!
                </div>
                </div>
                
            </div>
        );
    }
}
export default EmptyView;