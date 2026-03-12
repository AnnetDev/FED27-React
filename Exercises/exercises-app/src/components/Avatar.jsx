import { getImageUrl } from '../utils/utils';

function Avatar(props) { // or function Avatar({ person, size = 100 })  - with default value for size. destructuring by putting = and the default value right after the parameter
    let person = props.person;
    let size = props.size;

    return (
        <img
            src={getImageUrl(person)}
            alt="Lin Lanying"
            width={size}
            height={size}
        />
    );
}

export default Avatar;