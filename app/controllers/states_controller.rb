class StatesController < ApplicationController
  before_action :set_state, only: %i[show edit update destroy]
  before_action :authenticate_user!
  load_and_authorize_resource
  # GET /states
  # GET /states.json
  def index
    if params[:q]
      search_term = params[:q]
      @states = State.where('state_name ilike :search OR state_official_name ilike :search OR state_name_en ilike :search', search: "%#{search_term}%").paginate(page: params[:page]).per_page(10)
      @search_result = @states.count

    else
      @states = State.all.paginate(page: params[:page]).per_page(10)
    # @states_asia = State.states_asia.page(params[:page]).per_page(10)
    # @states_africa = State.states_africa.page(params[:page]).per_page(10)
    # @states_north_america = State.states_north_america.page(params[:page]).per_page(10)
    # @states_south_america = State.states_south_america.page(params[:page]).per_page(10)
    # @states_australia = State.states_australia.page(params[:page]).per_page(10)
  end
  end

  # GET /states/1
  # GET /states/1.json
  def show
    respond_to do |format|
      format.html
      format.pdf do
        render pdf: @state.state_name.to_s,
               template: 'states/show.html.erb',
               disposition: 'attachment',
               layout: 'pdf.html'
      end
    end
   end

  # GET /states/new
  def new
    @state = State.new
  end

  # GET /states/1/edit
  def edit; end

  # POST /states
  # POST /states.json
  def create
    @user = current_user
    @state = @user.states.new(state_params)

    respond_to do |format|
      if @state.save
        format.html { redirect_to @state, notice: 'تم حفظ بيانات الدولة بنجاح.' }
        format.json { render :show, status: :created, location: @state }
      else
        format.html { render :new }
        format.json { render json: @state.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /states/1
  # PATCH/PUT /states/1.json
  def update
    respond_to do |format|
      if @state.update(state_params)
        format.html { redirect_to @state, notice: 'تم تعديل بيانات الدولة بنجاح.' }
        format.json { render :show, status: :ok, location: @state }
      else
        format.html { render :edit }
        format.json { render json: @state.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /states/1
  # DELETE /states/1.json
  def destroy
    @state.destroy
    respond_to do |format|
      format.html { redirect_to states_url, notice: 'تم حذف الدولة بنجاح.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_state
    @state = State.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def state_params
    params.require(:state).permit(:state_name, :state_official_name, :state_name_en, :state_official_name_en, :state_continent, :state_size, :state_population, :state_major_cities, :state_official_lang, :state_currency, :state_religion, :state_neighbors, :state_nature, :state_provinces, :state_flag, :state_map, :state_origin, :state_political_background, :state_regime_type, :state_goverment, :state_constitution, :state_foreign_affairs, :state_current_issues, :state_political_parties, :state_regime_members, :state_international_representation, :state_relations_with_palestine)
  end
end
