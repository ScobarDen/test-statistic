import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';


const UserStore = create()(immer((set)=>({
    userData:{
        name:undefined,
        profilePhoto: 'https://cdn1.iconfinder.com/data/icons/free-98-icons/32/happy-1024.png'
    },
    fetchUser:()=>{
        fetch('api')
            .then(response => response.json())
            .then(json => {
            set((state) => ({
                ...state,
                userData: {
                    name:JSON.parse(json.name),
                    profilePhoto: JSON.parse(json.profilePhoto)
                }
            }))
        })
    }
})))

export default UserStore;