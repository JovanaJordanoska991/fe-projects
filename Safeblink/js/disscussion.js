    const classes = ['card-one-custom', 'card-two-custom', 'card-three-custom'];

    function getRandomClass() {
      return classes[Math.floor(Math.random() * classes.length)];
    }

    const comments = JSON.parse(localStorage.getItem('comments')) || [
      { name: 'Име Презиме', text: 'Lorem ipsum е едноставен модел на текст кој се користел во печатарската индустрија.', date: '00/00/0000', time: '00:00', class: getRandomClass() },
      { name: 'Име Презиме', text: 'Lorem ipsum е едноставен модел на текст кој се користел во печатарската индустрија.', date: '00/00/0000', time: '00:00', class: getRandomClass() },
      { name: 'Име Презиме', text: 'Lorem ipsum е едноставен модел на текст кој се користел во печатарската индустрија.', date: '00/00/0000', time: '00:00', class: getRandomClass() },
      { name: 'Име Презиме', text: 'Lorem ipsum е едноставен модел на текст кој се користел во печатарската индустрија.', date: '00/00/0000', time: '00:00', class: getRandomClass() },
      { name: 'Име Презиме', text: 'Lorem ipsum е едноставен модел на текст кој се користел во печатарската индустрија.', date: '00/00/0000', time: '00:00', class: getRandomClass() }
    ];

    function renderComments() {
      const board = document.getElementById('discussion-board');
      board.innerHTML = ''; // Clear the board before rendering
      // Add the comment card
      const commentCardHTML = `
        <div class="col mb-4">
          <div id="comment-card" class="card p-3 achievment-card">
            <div class="card-body">
              <div class="form-group">
                <input
                  id="comment"
                  type="text"
                  class="form-control txtfield-bborder"
                  placeholder="Сподели искуство"
                  onkeydown="if(event.key === 'Enter') addComment()"
                />
              </div>
              <div class="d-flex align-items-center mb-3">
                <img
                  src="assets/small-avatar.png"
                  class="rounded-circle mr-3 me-3"
                  alt="Avatar"
                />
                <div class="flex-grow-1">
                  <h6 class="mb-0">Име Презиме</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      board.innerHTML += commentCardHTML;
      // Add all other comments
      comments.forEach(comment => {
        const card = `
          <div class="col mb-4">
            <div class="card p-3 ${comment.class}">
              <div class="card-body">
                <p class="card-text">
                  ${comment.text}
                </p>
                <div class="d-flex align-items-center mb-3">
                  <img
                    src="assets/small-avatar.png"
                    class="rounded-circle mr-3 me-3"
                    alt="Avatar"
                  />
                  <div class="flex-grow-1">
                    <h6 class="mb-0">${comment.name}</h6>
                  </div>
                  <small class="text-muted ml-auto">${comment.date}, ${comment.time}</small>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control txtfield-bborder"
                    placeholder="Пиши коментар..."
                    readonly
                  />
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <div class="d-flex align-items-center">
                    <i class="fas fa-plus mr-2"></i>
                  </div>
                  <div class="d-flex align-items-center">
                    <label>5 Коментари</label>
                  </div>
                  <div class="d-flex align-items-center">
                    <label>84 Реакции</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        board.innerHTML += card;
      });
    }

    function addComment() {
      const text = document.getElementById('comment').value;
      const name = 'Име Презиме'; // Placeholder, can be dynamic if needed
      const date = new Date().toLocaleDateString('mk-MK');
      const time = new Date().toLocaleTimeString('mk-MK', { hour: '2-digit', minute: '2-digit' });
      const cardClass = getRandomClass();

      if (text) {
        const newComment = { name, text, date, time, class: cardClass };
        comments.push(newComment);
        localStorage.setItem('comments', JSON.stringify(comments));
        renderComments();
        document.getElementById('comment').value = '';
      } else {
        alert('Please enter a comment.');
      }
    }

    document.addEventListener('DOMContentLoaded', renderComments);
