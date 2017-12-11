class MenuItemsController < ApplicationController
  before_action :set_api_menu_item, only: [:show, :update, :destroy]

  # GET /api/menu_items
  def index
    @api_menu_items = MenuItem.all

    render json: @api_menu_items
  end

  # GET /api/menu_items/1
  def show
    render json: @api_menu_item
  end

  # POST /api/menu_items
  def create
    @api_menu_item = MenuItem.new(api_menu_item_params)

    if @api_menu_item.save
      render json: @api_menu_item, status: :created
    else
      render json: @api_menu_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/menu_items/1
  def update
    if @api_menu_item.update(api_menu_item_params)
      render json: @api_menu_item
    else
      render json: @api_menu_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/menu_items/1
  def destroy
    @api_menu_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_menu_item
      @api_menu_item = MenuItem.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def api_menu_item_params
      params.fetch(:menu_item).permit(:item, :description, :price)
    end
end
