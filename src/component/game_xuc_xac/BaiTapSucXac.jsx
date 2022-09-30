import React, { Component } from 'react'
import {connect} from 'react-redux'

 class BaiTapSucXac extends Component {
    state = {
        // isTai: true,
        // arrHinh: [
        //     "./img_xuc_xac/1.png",
        //     "./img_xuc_xac/2.png",
        //     "./img_xuc_xac/3.png",
        //     "./img_xuc_xac/4.png",
        //     "./img_xuc_xac/5.png",
        //     "./img_xuc_xac/6.png"
        // ],
        // arrKetQua: [
        //     "./img_xuc_xac/5.png",
        //     "./img_xuc_xac/6.png",
        //     "./img_xuc_xac/1.png"
        // ],
        // ketQua: 0,
        // soBanThang: 0,
        // tongBanChoi: 0,
    }

    thayDoiCuoc = (giaTri) => {
       this.props.dispatch({
        type: "THAY_DOI_CUOC",
        payload: giaTri
       })
            
    }

    ketQua = () => {
        this.props.dispatch({
            type: "KET_QUA"
        })
        // let {arrHinh,soBanThang,tongBanChoi,isTai} = this.state;
        // let arrNew = [];
        // let tong = 0;
        // for (let index = 0; index < 3; index++) {
        //    let randomIndex = Math.floor(Math.random() * 6);
        //    let giaTri = randomIndex + 1;
        //    tong += giaTri;
        //   arrNew.push(arrHinh[randomIndex]);
        // }
        //  let soBanThangNew = soBanThang;
        // if (isTai == true && tong % 2 == 0) {
        //     soBanThangNew += 1
        // }

        // if (isTai == false && tong % 2 != 0) {
        //     soBanThangNew += 1
        // }

        // this.setState({ 
        //     arrKetQua: arrNew,
        //     ketQua: tong,
        //     soBanThang: soBanThangNew,
        //     tongBanChoi: tongBanChoi + 1
        // })
    }
  render() {
    let {isTai,arrKetQua,ketQua,soBanThang,tongBanChoi} = this.props.XucXacReducer;
    return (
      <div className='w-[100%] h-screen' >
        <h1 className='font-bold p-5'>Game Đổ Xúc Xắc</h1>
        <h3 className='font-bold '>
            Chẵn: Tài
         Lẻ: Xỉu</h3>

        <div className='container flex justify-between'>
            <button className={`${isTai ? 'bg-red-500' : 'bg-blue-500'} w-[200px] text-white text-2xl`} onClick={() => this.thayDoiCuoc(true)}>Tài</button>
            <img src={arrKetQua[0]} alt="" />
            <img src={arrKetQua[1]} alt="" />
            <img src={arrKetQua[2]} alt="" />
            <button className={`${isTai ? 'bg-blue-500' : 'bg-red-500'} w-[200px] text-white text-2xl`}  onClick={() => this.thayDoiCuoc(false)}>Xỉu</button>
        </div>

        <div>
        <h3 className='font-bold '>Kết quả nút: {ketQua}</h3>
            <h3 className='font-bold '>Bạn chọn: {isTai ? "Tài" :"Xỉu"}</h3>
            <h3 className='font-bold '>Số Bàn Thắng: {soBanThang}</h3>
            <h3 className='font-bold '>Tổng số bàn chơi: {tongBanChoi}</h3>
            <button className='rounded-none bg-blue-500 w-20 h-20 text-white text-[10pt]' onClick={() => this.ketQua()}>Play Game</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
   XucXacReducer: state.XucXacReducer
    }
}
 export default connect(mapStateToProps, null)(BaiTapSucXac)