import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function CircularProgress({className,percentage,content,...rest}){
    
    return <div className={`${className} position-relative`}>
        <CircularProgressbar className='position-absolute h-fit w-fit' value={percentage}  {...rest}/>
        <div className='h-fit w-fit'>{content}</div>
        </div>
}   