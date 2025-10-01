import classes from'./Button.module.css'
// console.log(classes)

function Button({children, BtnClick, isActive, ...props}) {
    // let classes = 'button'
    // if(isActive) classes += ' active'
    // const handleMouseEnter = () => console.log('mouse entered')
    // return (
    //     <button className={classes} onClick={handleClick} onMouseEnter={handleMouseEnter} onDoubleClick={()=>console.log('dbl click')}>{children}</button>
    // )
    return (

        
        <button {...props} className={isActive ? `${classes.button} ${classes.active}` : `${classes.button}`} onClick={BtnClick}>
            {children}
        </button>
    )
}
export default Button