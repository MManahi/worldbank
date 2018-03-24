class State < ApplicationRecord
  belongs_to :user

  scope :states_asia, -> { where(state_continent: 'اسيا') }
  scope :states_africa, -> { where(state_continent: 'افريقيا') }
  scope :states_north_america, -> { where(state_continent: 'امريكا الشمالية') }
  scope :states_south_america, -> { where(state_continent: 'امريكا الجنوبية') }
  scope :states_australia, -> { where(state_continent: 'استراليا') }

  validates :state_name, length: { minimum: 3, too_short: ' الحقل الخاص بـ (اسم الدولة باللغة العربية) يجب الا يكون فارغا او يحتوى على اقل من (3) حروف.' }
  validates :state_name_en, length: { minimum: 4, too_short: ' الحقل الخاص بـ (اسم الدولة باللغة الانجليزية) يجب الا يكون فارغا او يحتوي على اقل من (4) حروف.' }
  validates :state_continent, length: { minimum: 4, too_short: ' الحقل الخاص بـ (القارة التي تقع فيها الدولة) يجب الا يكون فارغا او يحتوى على اقل من (4) حروف.' }
  # validates :state_size, numericality: { greater_than_or_equal_to: 100,  message: 'الحقل الخاص بـ (مساحة الدولة) يجب الا يكون فارغا و الا يحتوى الا على ارقام و الا تكون المساحة اقل من (100) كيلومتر مربع.' }
  # validates :state_population, numericality: { greater_than_or_equal_to: 10000,  message: 'الحقل الخاص بـ (التعداد السكاني) يجب الا يكون فارغا  و الا يحتوى الا على ارقام و الا يكون التعداد السكاني اقل من (10,000) نسمة.' }
  validates :state_official_lang, length: { minimum: 5, too_short: 'الحقل الخاص بـ (لغة الدولة الرسمية) يجب الا يكون فارغا و الا يحتوي على اقل من (5) احرف. ' }
  validates :state_currency, length: { minimum: 4, too_short: '  الحقل الخاص بـ (العملة الرسمية المتداولة ) يجب الا يكون فارغا او يحتوى على اقل من (4) حروف.' }
  validates :state_neighbors, length: { minimum: 20, too_short: '  الحقل الخاص بـ (الدول المجاورة للدولة) يجب الا يكون فارغا او يحتوى على اقل من (20) حروف.' }
  validates :state_flag, format: { with: /\.(png|jpg|jpeg)\Z/i , message: '  الحقل الخاص بـ (علم الدولة) يجب الا يكون فارغا و ان تكون صيغة الحقل (flag-name.png) وان يكون الامتداد (png. او .jpg او .jpeg فقط).'}
  validates :state_map, format: { with: /\.(png|jpg|jpeg)\Z/i , message: ' الحقل الخاص بـ (خريطة الدولة) يجب الا يكون فارغا و ان تكون صيغة الحقل (map-name.png) وان يكون الامتداد (png. او .jpg او .jpeg فقط).'}

  def format_state_size(state_size)
    state_size.to_s.scan(/.../).map {|e| e.to_i }
  end

   # self.per_page = 10
end
