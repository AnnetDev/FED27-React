import {useEffect, useRef, useState} from 'react';

export function CustomInput({ref, ...rest}){
    return <input ref={ref} {...rest} />;
}

export function RefExample() {
    const [count, setCount] = useState(0);

    const inputRef = useRef(null);
    const countRef = useRef(0)
    const aboutSectionRef = useRef(null);

    const forwardInputRef = useRef(null);

    // useEffect(() => {
    //     inputRef.current.focus();
    // }, []);

    function handleCount(){
        setCount(prevState => prevState + 1);
        setCount(prevState => prevState + 1);
        setCount(prevState => prevState + 1);
        setCount(prevState => prevState + 1);
    }

    function handleGoToAboutClick(){
        if(!aboutSectionRef.current) return;

        aboutSectionRef.current.scrollIntoView({behavior: "smooth" });
    }

    function handleFocusClick(){
        if(!forwardInputRef.current) return;

        forwardInputRef.current.focus();
    }

    return (
        <div>
            {/*<input ref={inputRef} type={'text'} placeholder={'name'} />*/}
            {/*<h1>{count}</h1>*/}
            {/*<h1>{countRef.current}</h1>*/}
            {/*<button onClick={handleCount}>Increment</button>*/}
            {/*<button onClick={() => {*/}
            {/*    countRef.current = countRef.current + 1*/}
            {/*    console.log(countRef.current)*/}
            {/*}}>Increment refCount</button>*/}
            {/*<div>*/}
            {/*    <button onClick={handleGoToAboutClick}>Go to About Section</button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad commodi dicta earum esse exercitationem illum, ipsum, numquam quas quisquam temporibus voluptas. Dolores facilis laboriosam minima, placeat praesentium repellendus? Accusamus dignissimos esse illo iure laborum laudantium minus! Et eum eveniet facere omnis perferendis sed soluta temporibus voluptates. Animi commodi cumque distinctio dolor eum excepturi exercitationem, incidunt ipsum maxime nobis nostrum odio omnis perspiciatis porro sed vel veniam vitae voluptas? Aliquid animi aperiam aut beatae consectetur consequuntur cupiditate deserunt distinctio ducimus eos ex expedita hic, ipsa laudantium magnam molestiae mollitia nemo nesciunt obcaecati omnis pariatur quibusdam ratione repudiandae rerum suscipit tenetur velit voluptatum. Atque aut blanditiis consequuntur dicta dolorum molestiae, necessitatibus nemo. Beatae deleniti dolorem error, facere, in iusto minus, molestiae numquam perferendis quidem rerum ut? Consequuntur fugit, molestias mollitia quae quasi rem reprehenderit veniam? Aliquam, amet delectus dolorem earum excepturi fuga libero magnam nihil odio odit quisquam ratione ullam, vitae. Ab aut cumque eius eum fugit illo ipsa ipsum nihil, nobis obcaecati porro praesentium, quia rem reprehenderit tempore, tenetur vero. Error est ipsam nemo non quia quos sint. Architecto aut consequuntur excepturi expedita minima odio possimus qui recusandae. Animi atque blanditiis commodi delectus deleniti dolorem error eum exercitationem expedita facere facilis id, impedit ipsa laudantium maxime molestias natus necessitatibus non nostrum omnis pariatur perspiciatis provident quaerat repellendus sed sit tempore totam vel voluptate voluptates? Ad alias atque blanditiis cupiditate debitis dolor dolorem doloremque esse est explicabo id illo iure, iusto libero magnam, minima molestiae neque nobis possimus quaerat qui quibusdam quod reiciendis saepe sapiente sunt ut vitae? Accusamus cumque nihil quas? A ad adipisci alias amet atque beatae commodi et, id inventore mollitia, perferendis quidem quo recusandae. Asperiores deleniti dolorem minus nobis quaerat quasi repellat sed. Beatae blanditiis corporis culpa dolorem laborum maxime nemo praesentium, rem saepe suscipit, tenetur voluptatum. Dicta, minima, possimus. Ab cum hic maxime, perspiciatis possimus quaerat qui reiciendis suscipit! Architecto deserunt dolores ducimus eaque impedit ipsa libero odio omnis perspiciatis vel! Animi at consequatur, cum doloremque dolores, doloribus eum ipsa ipsum maiores minima tempore vero vitae. Alias autem, commodi corporis deleniti dicta dolorum facere facilis mollitia sequi suscipit ullam voluptatem! Ab adipisci autem, blanditiis commodi dolorem eligendi error fugit illo labore minima mollitia officiis praesentium quae sit totam. Consequuntur expedita minus officia perferendis quia rem! Adipisci aliquam dicta ipsa mollitia nam nesciunt nisi officia sit ullam veritatis? A accusamus aliquam aut, autem, consequuntur cumque doloremque fugit ipsam libero magnam minima nam odio quaerat saepe sunt ut vitae. Debitis enim harum inventore laborum nihil nobis officia possimus quaerat, tenetur voluptatem. Cumque eligendi facilis fuga inventore maxime natus obcaecati, ratione ullam vitae voluptate. Architecto eius ex hic id illo laudantium natus, nesciunt perferendis quas reprehenderit. Aliquid cupiditate dolore facilis in ipsa, magni natus nesciunt velit? Asperiores blanditiis illum iusto labore maiores nihil quae quam reiciendis repellendus sequi temporibus, voluptatibus? Architecto asperiores aspernatur atque autem dignissimos, doloribus eaque eos facere facilis iure minima molestiae nulla officiis quia quibusdam repellat vitae? A delectus eligendi esse illo iusto modi nam reprehenderit.*/}
            {/*</div>*/}
            {/*<section ref={aboutSectionRef}>*/}
            {/*    <h2>About Us</h2>*/}
            {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur deleniti ex explicabo harum, nihil vitae! Adipisci animi architecto assumenda autem blanditiis excepturi quam quisquam voluptas voluptatem voluptates! Aliquam aliquid amet aut cupiditate dicta doloribus ea eius eligendi, esse, facere facilis fugiat hic itaque labore modi molestias nam numquam odio praesentium quos rem repudiandae sapiente sed tempore tenetur vero voluptatum! A ab adipisci amet beatae debitis delectus eius et expedita facere harum illo in ipsam ipsum iste magni necessitatibus nesciunt non provident quia quibusdam quo quos ratione rem, rerum tempora! A ad animi aspernatur, aut commodi consequuntur distinctio doloremque doloribus eligendi error fuga harum, ipsum itaque laboriosam, maxime nihil obcaecati provident qui quia repellendus rerum sapiente soluta tenetur ullam unde? Accusantium adipisci asperiores blanditiis commodi deleniti est, explicabo hic iusto necessitatibus nesciunt nostrum, omnis rerum tempore tenetur voluptatibus? Ab asperiores blanditiis consequatur dolore eius excepturi explicabo id illum maxime necessitatibus nobis saepe, sapiente sit tempora veniam! Ad aliquid assumenda, consequatur consequuntur debitis deleniti dicta dolores ducimus eaque eos id labore libero natus nemo non odio officiis placeat provident quam quasi quibusdam quisquam quo tempora? Alias cumque dicta dolor, est excepturi exercitationem facere illum ipsam iure molestias nam non odit porro quaerat reprehenderit saepe sint suscipit. Assumenda, blanditiis dolore dolorum eaque magni minus quisquam voluptatum. Ea eum exercitationem quam reprehenderit voluptatum? Cumque mollitia nam repudiandae! Aliquid corporis cumque ea excepturi in ipsum iste possimus qui suscipit voluptas? Architecto blanditiis dolorum eum necessitatibus, officiis porro sunt! Accusamus aliquam cum exercitationem expedita minus perspiciatis, quae repudiandae. Ad aliquam amet aut cupiditate delectus deserunt dignissimos distinctio doloribus eligendi est eveniet, ex, fuga laboriosam quo ratione recusandae repellat reprehenderit suscipit tempore, tenetur! Alias aliquid assumenda beatae cumque eaque facere fuga illo in inventore itaque iusto maxime modi molestiae natus, nemo nesciunt non officiis perferendis, quo recusandae repellendus repudiandae rerum sed sint totam vel veritatis vitae. Accusamus ad alias aut cumque debitis distinctio dolor enim explicabo illo in ipsa itaque libero maiores molestias necessitatibus nesciunt numquam omnis possimus quasi, recusandae reiciendis rem repellendus suscipit, tempora voluptas? Explicabo nisi, quia! Ad, aut commodi doloremque esse est excepturi, fugit hic laudantium natus perspiciatis quis, quo repellendus tempore temporibus voluptatibus. Amet animi aut corporis cumque cupiditate deserunt dolorum earum eligendi enim, incidunt inventore ipsa ipsam iste libero odio odit possimus quam quo quod recusandae reprehenderit repudiandae saepe sequi suscipit totam veniam vitae, voluptatibus? Adipisci cupiditate excepturi magnam modi molestiae non perspiciatis provident, quas, sed sint sit tempora ut vitae? Ad asperiores autem consectetur corporis debitis doloremque, doloribus eaque earum facilis laborum libero maiores officia, perspiciatis possimus quaerat qui quidem quis sed tempore vitae? Aliquam animi autem dolorem, dolores eaque eius eos esse excepturi facere in inventore maiores molestias mollitia nihil officia optio quidem quis quisquam quos, ratione, recusandae reiciendis repellendus sit ullam unde vitae voluptatem! At deleniti dignissimos harum laborum maiores molestiae nam necessitatibus nobis quia quibusdam. Asperiores blanditiis consequatur dicta fuga id itaque natus nobis repellendus tempora vero! Amet beatae blanditiis ducimus ipsa iure laborum nulla perspiciatis qui.*/}
            {/*</section>*/}
            <CustomInput ref={forwardInputRef} type={'text'}  />
            <button onClick={handleFocusClick}>Focus on the forward input</button>
        </div>
    );
}