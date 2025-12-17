export const getImageUrl =(imagePath)=>{
    if(process.env.IS_LOCAL === true){
        return "/images/"+ imagePath;
    }
    return "/images/"+ imagePath;
}