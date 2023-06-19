import createElement from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
    const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
    const fighterElement = createElement({
        tagName: 'div',
        className: `fighter-preview___root ${positionClassName}`
    });

    // todo: show fighter info (image, name, health, etc.)

    if (fighter) {
        const { attack, defense, health, name, source } = fighter;

        const image = document.createElement('img');
        const title = document.createElement('h3');

        const stats = document.createElement('ul');
        const attackItem = document.createElement('li');
        stats.appendChild(attackItem);
        const defenseItem = document.createElement('li');
        stats.appendChild(defenseItem);
        const healthItem = document.createElement('li');
        stats.appendChild(healthItem);

        image.src = source;
        image.alt = name;
        title.textContent = name;
        attackItem.textContent = `Attack: ${attack}`;
        defenseItem.textContent = `Defense: ${defense}`;
        healthItem.textContent = `Health: ${health}`;

        fighterElement.append(image, title, stats);
    }

    return fighterElement;
}

export function createFighterImage(fighter) {
    const { source, name } = fighter;
    const attributes = {
        src: source,
        title: name,
        alt: name
    };
    const imgElement = createElement({
        tagName: 'img',
        className: 'fighter-preview___img',
        attributes
    });

    return imgElement;
}
