const stateDefault = {
    isTai: true,
    arrHinh: [
        "./img_xuc_xac/1.png",
        "./img_xuc_xac/2.png",
        "./img_xuc_xac/3.png",
        "./img_xuc_xac/4.png",
        "./img_xuc_xac/5.png",
        "./img_xuc_xac/6.png"
    ],
    arrKetQua: [
        "./img_xuc_xac/5.png",
        "./img_xuc_xac/6.png",
        "./img_xuc_xac/1.png"
    ],
    ketQua: 0,
    soBanThang: 0,
    tongBanChoi: 0
}
export const XucXacReducer = (state = stateDefault, action) => {
const {type,payload} = action;
 switch (type) {
    case "THAY_DOI_CUOC": {
        state.isTai = payload;
        return {...state};
    }
        case "KET_QUA": {
            let {soBanThang,tongBanChoi,isTai} = state;
            let arrHinh = {...state.arrHinh};
            let arrNew = [];
            let tong = 0;
            for (let index = 0; index < 3; index++) {
               let randomIndex = Math.floor(Math.random() * 6);
               let giaTri = randomIndex + 1;
               tong += giaTri;
              arrNew.push(arrHinh[randomIndex]);
            }
             let soBanThangNew = soBanThang;
            if (isTai == true && tong % 2 == 0) {
                soBanThangNew += 1
            }
    
            if (isTai == false && tong % 2 != 0) {
                soBanThangNew += 1
            }
    
            return {
                ...state,
                arrKetQua: arrNew,
                ketQua: tong,
                soBanThang: soBanThangNew,
                tongBanChoi: tongBanChoi + 1
            
            }
        }
    
 
    default:
        return {...state}
 }
  }