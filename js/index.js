document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-btn');
    const planLinks = {
    'Individual': 'https://tally.so/r/mBJdD5',
    'Completo': '#', // Substitua pelo link real
    'Premium': '#'   // Substitua pelo link real
    };
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const plan = this.parentElement.querySelector('h3').textContent;
            
            // Verifica se é o plano Individual
            if (plan.trim() === 'Individual') {
                window.location.href = planLinks[plan.trim()];
            } else {
                const price = this.parentElement.querySelector('.price').textContent;
                alert(`Plano selecionado: ${plan}\nValor: ${price}\n\nVocê será redirecionado para o pagamento via PIX.`);
            }
        });
    });
});