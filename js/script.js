 // Elementos DOM
 const bgColor = document.getElementById('bg-color');
 const bgColorText = document.getElementById('bg-color-text');
 const textColor = document.getElementById('text-color');
 const textColorText = document.getElementById('text-color-text');
 const fontFamily = document.getElementById('font-family');
 const fontSize = document.getElementById('font-size');
 const fontSizeValue = document.getElementById('font-size-value');
 const cardPadding = document.getElementById('card-padding');
 const cardPaddingValue = document.getElementById('card-padding-value');
 const borderRadius = document.getElementById('border-radius');
 const borderRadiusValue = document.getElementById('border-radius-value');
 const cardPreview = document.getElementById('card-preview');
 const toggleCard = document.getElementById('toggle-card');
 const cssOutput = document.getElementById('css-output');
 const copyBtn = document.getElementById('copy-btn');
 const themeBtns = document.querySelectorAll('.theme-btn');


 // Atualizar visualização em tempo real
 function updatePreview() {
    cardPreview.style.backgroundColor = bgColor.value;
    cardPreview.style.color = textColor.value;
    cardPreview.style.fontFamily = fontFamily.value;
    cardPreview.style.fontSize = `${fontSize.value}px`;
    cardPreview.style.padding = `${cardPadding.value}px`;
    cardPreview.style.borderRadius = `${borderRadius.value}px`;
    
    updateCSSOutput();
}

// Atualizar saída CSS
function updateCSSOutput() {
    const css = `.card {
font-family: ${fontFamily.value};
font-size: ${fontSize.value}px;
text-align: center;
color: ${textColor.value};
background-color: ${bgColor.value};
padding: ${cardPadding.value}px;
border-radius: ${borderRadius.value}px;
}`;
    
    cssOutput.value = css;
}

// Alternar entre frente e verso do cartão
toggleCard.addEventListener('click', () => {
    cardPreview.classList.toggle('show-back');
    toggleCard.textContent = cardPreview.classList.contains('show-back') 
        ? 'Mostrar Frente' 
        : 'Mostrar Verso';
});

// Copiar CSS para área de transferência
copyBtn.addEventListener('click', () => {
    cssOutput.select();
    document.execCommand('copy');
    copyBtn.textContent = 'Copiado!';
    setTimeout(() => {
        copyBtn.textContent = 'Copiar CSS';
    }, 2000);
});

// Sincronizar inputs de cor
bgColor.addEventListener('input', () => {
    bgColorText.value = bgColor.value;
    updatePreview();
});

bgColorText.addEventListener('input', () => {
    bgColor.value = bgColorText.value;
    updatePreview();
});

textColor.addEventListener('input', () => {
    textColorText.value = textColor.value;
    updatePreview();
});

textColorText.addEventListener('input', () => {
    textColor.value = textColorText.value;
    updatePreview();
});

// Atualizar controles deslizantes
fontSize.addEventListener('input', () => {
    fontSizeValue.textContent = `${fontSize.value}px`;
    updatePreview();
});

cardPadding.addEventListener('input', () => {
    cardPaddingValue.textContent = `${cardPadding.value}px`;
    updatePreview();
});

borderRadius.addEventListener('input', () => {
    borderRadiusValue.textContent = `${borderRadius.value}px`;
    updatePreview();
});

// Alterar fonte
fontFamily.addEventListener('change', updatePreview);

// Predefinições de tema
themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.dataset.theme;
        
        switch(theme) {
            case 'light':
                bgColor.value = '#ffffff';
                textColor.value = '#333333';
                break;
            case 'dark':
                bgColor.value = '#222222';
                textColor.value = '#eeeeee';
                break;
            case 'sepia':
                bgColor.value = '#f4ecd8';
                textColor.value = '#5b4636';
                break;
            case 'high-contrast':
                bgColor.value = '#000000';
                textColor.value = '#ffff00';
                break;
        }
        
        bgColorText.value = bgColor.value;
        textColorText.value = textColor.value;
        updatePreview();
    });
});

// Inicializar
updatePreview();