

export const getAllMissions = async () => {

    return await fetch("http://localhost:3000/api/missions", {
        cache: "no-store"
    }).then(data => {
        return data.json()
    }).catch(err => {throw new Error(err)})

}