const request=require('request');

const forecast= (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=522e583ce0e47a10dfb8286b5dc66888&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=f';
    request({url,json:true},(error,{body}={})=>{
        if(error)
        {
            callback('No connection',undefined);
        }
        else if(body.error)
        {
            callback('Input provided is not complete',undefined);
        }
        else
        {
            const x=body.current.temperature;
            const y=body.current.feelslike;
            const z=body.current.humidity;
            const a=body.current.weather_descriptions[0];
            callback(undefined,a+'. Actual temperature is '+x+' but it feels like '+y + '. ' +'Humidity is '+ z+' percent.');
        }
    })
}
module.exports=forecast;