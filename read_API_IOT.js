 function Ff  ()  {
        const   selectedDevice = useSelector((state) => state.devicesState.selectedDevice); // Rule 1: call hooks in top-level
      
        
        const [error, setError] = useState(null);
        const  [isLoaded, setIsLoaded] = useState(false);
        const   [homes, setHomes] = useState([]);
       
        useEffect(() => {
          setTimeout(() => {
           fetch(`https://iotibti.ddns.net:7999/forecast?dev_eui=${selectedDevice}`)
            .then (res => {
              return res.json();
            })
            .then(result => {
             setIsLoaded( true) ;
             setHomes( result);
             
            })
            .catch(err => {
               console.log(err.message);
               
               setIsLoaded( true) 
               setError()
            })
           },1000);
         },[]);
        
  
        var CircularJSON = require('circular-json');
        const  pd =    CircularJSON.stringify(homes   )
           
        const myJSON = JSON.stringify(pd);
        var first = myJSON.slice(26, 36);
        var first2 = myJSON.slice(51, 61);
        var first3  = myJSON.slice(76, 86);
        var first4  = myJSON.slice(101, 111);
        var first5 = myJSON.slice(126, 136);
        var first6  = myJSON.slice(151, 161);
        var first7  = myJSON.slice(176, 186);

        var second = myJSON.slice(219, 226);
        var second2 = myJSON.slice(241, 248);
        var second3 = myJSON.slice(263, 270);
        var second4 = myJSON.slice(285, 292);
        var second5 = myJSON.slice(307, 314);
        var second6 = myJSON.slice(329, 336);
        var second7 = myJSON.slice(351, 358);

     
const data = {
  labels:      [   `${first}` ,`${first2}` ,`${first3}`,`${first4}` ,`${first5}` ,`${first6}`,`${first7}`],
  datasets: [
    {
      label: "Valores de previsão",
      data: [  `${second }`, `${second2 }` ,`${second3}`, `${second4 }` ,`${second5 }`, `${second6 }` ,`${second7 }`   ],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};
const styleObj = {
  fontSize: 14,
  color: "#4a54f1",
  textAlign: "center",
  paddingTop: "100px",
} 
 
  return (
    
   
   <div style={{width: '800px',height:'600px',marginLeft: '540px',marginTop: '40px'}}>
        <Line
            data={data}
          
        />
    </div>
    
  );
}
