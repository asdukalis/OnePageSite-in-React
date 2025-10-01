import Button from "./Button/Button"

function TabsSection({active, onChange}) {

    return (
        <section style={{marginBottom:'1rem'}}>
            <Button 
                isActive={active === 'main'} 
                BtnClick={() => onChange('main')}>
                Главная
            </Button>
            <Button 
                isActive={active === 'feedback'}
                BtnClick={() => onChange('feedback')}>
                Обратная связь
            </Button>
            <Button 
                isActive={active === 'effect'}
                BtnClick={() => onChange('effect')}>
                Effect
            </Button>
        </section>
    )
}

export default TabsSection