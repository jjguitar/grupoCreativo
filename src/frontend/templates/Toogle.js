const Toogle = () => {
  const view = `
    <div class="change">
      <span class="toogle-text" id="texto-toogle"></span>
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
  `;
  return view;
};

export default Toogle;
