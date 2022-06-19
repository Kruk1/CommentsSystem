const input = document.querySelector('.comment-input')
const user = document.querySelector('#username')
const inputStyle = document.querySelector('.input-style')
const inputStyleUser = document.querySelector('.input-style-user')
const editBtns = document.querySelectorAll('.comment-edit')
let commentBefore

input.addEventListener('focusin', () =>
{
    inputStyle.classList.add('input-style-focus')
})

input.addEventListener('focusout', () =>
{
    inputStyle.classList.remove('input-style-focus')
})

input.addEventListener('input', () =>
{
    input.setAttribute("style",`height: ${input.scrollHeight}px;`)
    if(input.value === '' || input.value.length % 48 === 0)
    {
        input.setAttribute("style",`height: ${input.scrollHeight - 18}px;`)
    }
})

user.addEventListener('focusin', () =>
{
    inputStyleUser.classList.add('input-style-focus')
})

user.addEventListener('focusout', () =>
{
    inputStyleUser.classList.remove('input-style-focus')
})

editBtns.forEach(btn =>
{
    btn.addEventListener('click', e =>
    {
        if(!document.querySelector('#uniq'))
        {
            const editForm = document.querySelector('.edit-form')
            const editFormClone = editForm.content.cloneNode(true)
            const id = btn.parentElement.previousElementSibling
            const form = editFormClone.querySelector('form')
            console.log(editFormClone.querySelector('form'))
            form.append(id)
            commentBefore = btn.previousElementSibling.textContent
            const commentBox = editFormClone.querySelector('.comment-input-edit')
            btn.previousElementSibling.innerHTML = ''
            commentBox.textContent = commentBefore.trim()
            btn.previousElementSibling.append(editFormClone)
        }
        else
        {
            const editForm = document.querySelector('.edit-form')
            const editFormClone = editForm.content.cloneNode(true)
            const inputExist = document.querySelector('#uniq')
            inputExist.parentElement.textContent = commentBefore.trim()
            commentBefore = btn.previousElementSibling.textContent
            const commentBox = editFormClone.querySelector('.comment-input-edit')
            btn.previousElementSibling.innerHTML = ''
            commentBox.textContent = commentBefore.trim()
            btn.previousElementSibling.append(editFormClone)
        }
    })
})